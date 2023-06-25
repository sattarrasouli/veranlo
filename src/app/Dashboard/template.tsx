export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <p>this is a template in dashboard</p>
            {children}
        </div>
    )
}