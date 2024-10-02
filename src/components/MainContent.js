function MainContent(){
    return(
        
        <main>
            <form>
                <input 
                type="text"
                Placeholder="Top text"
                className="input"
                ></input>

                <input 
                type="text"
                Placeholder="Bottom text"
                className="input"
                ></input>

                <button

                className="submit"
                >
                 Get a new Generated image 
                </button>
            </form>
        </main>

    )
}

export default MainContent;