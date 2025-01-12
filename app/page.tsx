export default function Home() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center bg-white min-h-screen sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start text-white">
                <img
                    style={{
                        width: "100%",
                        height: "500px",
                        objectFit: "cover",
                        borderRadius: "20px",
                    }}
                    src="/images/portfolio/andi.jpg"
                />
                <h1 className="opacity-0 hover:opacity-70 text-black absolute top-64 ml-24 bg-white border-solid rounded-full border-2 border-black p-5">Tattoo</h1>
                <h1 className="opacity-0 hover:opacity-70 text-black absolute top-48 ml-56 bg-white border-solid rounded-full border-2 border-black p-5">
                    <a href="https://andiktd.vercel.app/">Art</a>
                </h1>
                <h1 className="opacity-0 hover:opacity-70 text-black absolute top-40 ml-32 bg-white border-solid rounded-full border-2 border-black p-5">Clothing</h1>
            </main>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
        </div>
    );
}
