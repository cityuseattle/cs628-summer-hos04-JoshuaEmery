export function Profile() {
  return (
    <>
      <h2>Profile</h2>
      <img
        src="https://i.imgur.com/MK3eW3As.jpg"
        alt="Katherine Johnson"
        srcset=""
      />
    </>
  );
}
function Gallery() {
  return (
    <section>
      <h2>Amazing Scientists</h2>
      <Profile></Profile>
    </section>
  );
}

export default Gallery;
