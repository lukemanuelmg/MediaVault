using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class GamesController : ControllerBase
{
    private readonly AppDbContext _context;

    public GamesController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<List<Game>> GetGames()
    {
        GameDAO dao = new(_context);
        List<Game> games = await dao.GetAll();
        return games;
    }
}