package controllers

import java.util.UUID

import play.api._
import play.api.libs.json.{JsArray, Json}
import play.api.mvc._

class Application extends Controller {

    //constants
    val JSON_KEY_AUTHOR = "author"
    val JSON_KEY_TEXT = "text"
    val JSON_KEY_COMMENTS = "comments"
    val JSON_KEY_ID = "id"

    //properties
    var commentsJson: JsArray = Json.arr(
        Json.obj(
            JSON_KEY_ID -> UUID.randomUUID().toString,
            JSON_KEY_AUTHOR -> "Pete Hunt",
            JSON_KEY_TEXT -> "This is first comment"),

        Json.obj(
            JSON_KEY_ID -> UUID.randomUUID().toString,
            JSON_KEY_AUTHOR -> "Michael Jordan",
            JSON_KEY_TEXT -> "This is another comment")
    )

    //actions
    def index = Action {
        Ok(views.html.projectDashboard())
    }

    def comments = Action {
        Ok(commentsJson)
    }

    def comment(author: String, text: String) = Action {
        val newComment = Json.obj(
            JSON_KEY_ID -> UUID.randomUUID().toString,
            JSON_KEY_AUTHOR -> author,
            JSON_KEY_TEXT -> text)

        commentsJson = commentsJson :+ newComment
        Ok(newComment)
    }

    //learn react
    def react = Action {
        Ok(views.html.projects_list())
    }

    def projectInfo = Action {
        val buttonInfo = Json.obj("project_name" -> "Coubera")
        Ok(buttonInfo)
    }

}
