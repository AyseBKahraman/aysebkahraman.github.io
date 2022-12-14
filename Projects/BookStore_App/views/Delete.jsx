const React = require("react");
const DefaultLayout = require("./layouts/Default");

class Delete extends React.Component {
  render() {
    return (
      <DefaultLayout title="Delete Book">
        <div className="big">
          <a href={'/books'} className="backSection">
            <img id="back" src="http://cdn.onlinewebfonts.com/svg/img_71127.png" alt="" />Back
          </a>

          <form 
            action={`/books/${this.props.book._id}?_method=DELETE`} method="POST">

            <div className="editForm">
              <p id="areyousure">Are you sure you want to delete this item? </p>
              <input type = 'submit' id="submitChange" value = 'Delete Book' ></input>
            </div>
          </form>
        </div>
      </DefaultLayout>
    );
  }
}
module.exports = Delete;

