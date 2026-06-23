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
}