const React = require("react");
const Def = require("../default");

function show(data) {
  let comments = <h2 className="inactive">Comments</h2>;
  let rating = <h2 className="inactive">Rating</h2>;
  rating = <h3>No comments yet!</h3>;
  comments = <h3>Not yet rated</h3>;
  return (
    <Def>
      <main>
        <h1>{data.place.name}</h1>
        <a href={`/places/${data.id}/edit`} className="btn btn-warning">
          Edit
        </a>
        <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
          <button type="submit" className="btn btn-danger">
            Delete
          </button>
        </form>
      </main>
    </Def>
  );
}

module.exports = show;
