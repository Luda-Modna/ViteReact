import ImageWrapper from "./components/ImageWrapper";

function App() {
  return (
    <ImageWrapper width='400px' height='300px' title='image'>
      <img
        src="https://images.pexels.com/photos/11046405/pexels-photo-11046405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="img"
      />
    </ImageWrapper>
  );
}

export default App;
