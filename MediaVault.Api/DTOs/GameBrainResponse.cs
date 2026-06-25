using System.Text.Json.Serialization;

public class GameBrainResponse
{ 
    
    [JsonPropertyName("results")]
    public List<GameBrainGame> SearchResults { get; set; } = new();

}