import CoverImage from "./cover-image";

export function HeroPost() {
    return (
        <section>
            <div className="mb-8 md:mb-16">
                <CoverImage
                    title={"Hero Post Title"}
                    url={"/taming-the-code-standards.webp"}
                    width={1500}
                    height={1000}
                    className="w-full object-cover max-h-[50vh] min-h-[300px]"
                    priority
                />
         </div>
        </section>
    );
}