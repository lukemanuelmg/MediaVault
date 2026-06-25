using System.Text.Json.Serialization;

public class GameBrainGame
{
    
    [JsonPropertyName("id")]
    public int Id {get; set;}

    [JsonPropertyName("name")]
    public string Name { get; set; } = string.Empty;

    public string? Developer { get; set;}
    
    [JsonPropertyName("year")]
    public double? Year { get; set; }

    [JsonPropertyName("image")]
    public string? CoverArtUrl { get; set; }

}