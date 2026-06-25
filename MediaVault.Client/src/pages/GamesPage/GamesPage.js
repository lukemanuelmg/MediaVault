 export async function getGames() {
        const url = "http://localhost:5280/api/games/getgames"
        
        try {
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            return await response.json();

        } catch (error) {
           console.error(error.message)
           return []
        }
    }