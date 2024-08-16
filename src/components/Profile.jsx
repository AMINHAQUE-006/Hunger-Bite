class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userInfo: {
                name: "username",
                location: "userLocation"
            }
        }
    }


    render() {
        
        return(
            <h1>Profile</h1>
        )
    }
}