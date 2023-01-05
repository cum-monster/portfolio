

export default function error404() {

    return (
        <>

            <section
                className="flex items-center h-full p-16 mt-28 dark:bg-neutral-900 dark:text-neutral-100"
            >
                <div
                    className="container flex flex-col items-center justify-center px-5 mx-auto my-8"
                >
                    <div className="max-w-md text-center">
                        <h2 className="mb-8 font-extrabold bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-600 text-9xl">404</h2>
                        <p className="text-2xl font-semibold md:text-3xl">
                            Sorry, this page does not exist
                        </p>
                        <p className="mt-4 mb-8 dark:text-neutral-400">
                            But dont worry, you can find plenty of other things on my website
                        </p>
                        <button
                            className="px-4 py-2 font-bold text-white rounded-md bg-gradient-to-r from-purple-400 to-fuchsia-600"
                            onClick={() => window.history.back()}>Go back</button>

                    </div>
                </div>
            </section>
        </>
    )
}