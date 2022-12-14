const React = require("react");
const DefaultLayout = require("./layouts/Default");

class Edit extends React.Component {
  render() {
    return (
      <DefaultLayout title="Edit Book">
        <div className="big">
          <a href={'/books'} className="backSection">
            <img id="back" src="http://cdn.onlinewebfonts.com/svg/img_71127.png" alt="" />Back
          </a>

          <form 
            action={`/books/${this.props.book._id}?_method=PUT`}
            method="POST">
            <br></br>

            <div className="editForm">
              Title:{" "}
              <input
                type="text"
                name="title"
                size="40"
                defaultValue={this.props.book.title}
              />
              <br></br>
              <br></br>
              Author:{" "}
              <input type="text" name="author" defaultValue={this.props.book.author} />
              <br />
              <br />
              Price:{" "}<br></br>
              <input type="text" name="price" defaultValue={this.props.book.price} />
              <br></br><br />
              Number of Copy:{" "} <br></br>
              <input type="text" name="copy" defaultValue={this.props.book.copy} />
              <br></br><br />
              Is Available:
              {this.props.book.isAvailable ? (
                <input type="checkbox" name="isAvailable" defaultChecked />
              ) : (
                <input type="checkbox" name="isAvailable" />
              )}
              <br /> <br />
              <input type="submit" id="submitChange"value="Update Book" />
            </div>
          </form>
        </div>
      </DefaultLayout>
    );
  }
}
module.exports = Edit;