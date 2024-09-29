import '../css/About.css'

const Admin=()=>{
    return (
        <>
        <iframe style={{
            background: "#F1F5F4",
            border: "none",
            borderRadius: "2px",
            boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            paddingLeft: "10%",
        }}
        src="https://charts.mongodb.com/charts-project-0-esmoguq/embed/dashboards?id=66e5cffc-a76f-4114-8300-560009847a69&theme=light&autoRefresh=true&maxDataAge=3600&showTitleAndDesc=false&scalingWidth=fixed&scalingHeight=fixed"></iframe>
        </>
    )
}
export default Admin;