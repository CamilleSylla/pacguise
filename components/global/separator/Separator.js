export default function Separator ({color}) {

    return <div style={{height: "5px", borderRadius: "50px", background: `${color ? color : "var(--secondary)"}`,width: "10%", margin: "2.5vh 0 2.5vh 0"}}/>
}