using System.Text.Json;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class GamesController : ControllerBase
{

    static private readonly HttpClient client = new HttpClient()
    {
        BaseAddress = new Uri("https://api.gamebrain.co/v1/games/")
    };

    private readonly AppDbContext _context;
    private readonly string? _gameBrainApiKey;

    public GamesController(AppDbContext context)
    {
        _context = context;
        _gameBrainApiKey = Environment.GetEnvironmentVariable("GAME_BRAIN_API_KEY");
    }

    [HttpGet("getgames")]
    public async Task<List<Game>> GetGames()
    {
        GameDAO dao = new(_context);
        List<Game> games = await dao.GetAll();
        return games;
    }

    [HttpPost("addgame")]
    public async Task<IActionResult> AddGame([FromBody] Game game)
    {
        if (game == null) return BadRequest("Game data is required.");
        
        GameDAO dao = new(_context);
        await dao.AddGame(game);
        return Ok(game);
    }


    [HttpGet("search-gamebrain")]
    public async Task<IActionResult> SearchGames([FromQuery] string search)
    {
        if (string.IsNullOrWhiteSpace(search)) return StatusCode(400, "Search must not be empty.");
        if (string.IsNullOrWhiteSpace(_gameBrainApiKey)) return StatusCode(500, "Game Brain API key not found in .env file.");

        var result = await client.GetAsync($"suggestions?query={Uri.EscapeDataString(search)}&limit=5&api-key={_gameBrainApiKey}");
        string resultJson = await result.Content.ReadAsStringAsync();
        Console.WriteLine(resultJson);
        var responseObject = JsonSerializer.Deserialize<GameBrainResponse>(resultJson);

        return Ok(responseObject);

    }

}