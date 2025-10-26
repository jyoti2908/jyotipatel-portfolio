import Body from "../components/Body";

function Home(){
    return(
        <div className="bg-cover bg-no-repeat opacity-0 animate-fadeIn min-h-[60vh] sm:min-h-[70vh] md:min-h-[90vh] lg:min-h-screen"
                style={{ backgroundImage: "url('react.jpg')" }}>
          <Body/>
        </div>
    )
}
export default Home;