using Microsoft.EntityFrameworkCore;

public class GameDAO
{
    readonly AppDbContext _context;
        public GameDAO(AppDbContext context)
        {
            _context = context;
        }
        public async Task<List<Game>> GetAll()
        {
            return await _context.Games.ToListAsync();
        }

        public async Task<Game> AddGame(Game game)
        {
            await _context.Games.AddAsync(game);
            await _context.SaveChangesAsync();
            return game;
        }
}