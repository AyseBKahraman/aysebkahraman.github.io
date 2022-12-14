//form for users to create a new instance of a Student and save into database

const React = require("react");
const DefaultLayout = require("./layouts/Default");
class New extends React.Component {
  render() {
    return (
      <DefaultLayout title={"New Book Page"}>

        <div className="big">
          
          <a href={'/books'} className="backSection">
            <img id="back" src="http://cdn.onlinewebfonts.com/svg/img_71127.png" alt="" />Back
          </a>
          

          <form action="/books" method="POST">
            <div className="editForm">
              Image:{" "} 
              <input type="text" name="imageUrl" />
              <br />
              Title:{" "} 
              <input type="text" name="title" />
              <br />
              Author:{" "} 
              <input type="text" name="author" />
              <br />
              Price:{" "} 
              <input type="text" name="price" />
              <br />
              Number of Copy:{" "} 
              <input type="text" name="copy" />
              <br />
              Is Available : <input type="checkbox" name="isAvailable" />
              <br />
              <input type="submit" id="createBook" name="" value="Create Book" />
            </div>
          </form>
        </div>
        
      </DefaultLayout>
    );
  }
}
module.exports = New;