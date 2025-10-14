import Body from "../components/Body";

function Home(){
    return(
        <div className="bg-cover bg-no-repeat opacity-0 animate-fadeIn h-[700px]"
                style={{ backgroundImage: "url('react.jpg')" }}>
          <Body/>
        </div>
    )
}
export default Home;