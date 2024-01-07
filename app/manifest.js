export default function manifest(){
    return {
        name: "Emdadul's Blog",
        short_name: "Emdadul's Blog",
        description: "A simple personal blog site built with Next.js and TailwindCSS",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#ffffff",
        icons : [
            {
                src : '/favicon.ico',
                sizes : '32x32',
                type : 'image/x-icon'
            }
        ]
    }
}