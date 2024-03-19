import { SearchBar } from '../components/SearchBar'; // Adjust the path according to your file structure

export function Home() {
    return (
        <>
            <h1 className="title">Find new recipes from around the world</h1>
            <SearchBar />
        </>
    );
}
