using System.ComponentModel.DataAnnotations;

public class Game
{
    [Key]
    public int Id { get; set; }
    
    [Required]
    [StringLength(200, MinimumLength = 1)]
    public string Title { get; set; } = string.Empty;

    [StringLength(200)]
    public string? Developer { get; set;}

    [StringLength(200)]
    public string? Publisher { get; set;}
    
    public DateOnly? ReleaseDate {get; set;}
}