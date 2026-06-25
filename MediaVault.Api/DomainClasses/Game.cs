using System.ComponentModel.DataAnnotations;

public class Game
{
    [Key]
    public int Id { get; set; }

    public int? GameBrainId { get; set; }
    
    [Required]
    [StringLength(200, MinimumLength = 1)]
    public string Title { get; set; } = string.Empty;

    [StringLength(200)]
    public string? Developer { get; set;}

    public string? CoverArtUrl { get; set; }
    
    public int? ReleaseYear {get; set;}

    
}