export function openModal(modalRef) {
    const modal = modalRef.current
    
    if (!modal) return;
    
    modal.showModal()
}

export async function fetchSearchResults(search) {
    const url = `http://localhost:5280/api/games/search-gamebrain?search=${encodeURIComponent(search)}`
        
        try {
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const data = await response.json()
            return data.results ?? [];

        } catch (error) {
           console.error(error.message)
           return []
        }
}
