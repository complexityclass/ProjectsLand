package controllers

import play.api.libs.json.{JsArray, Json}
import play.api.mvc._

/**
  * Created by V.Popov on 24/01/16.
  */
class DashboardController extends Controller {

    val LOGIN_FIELD = "login"
    val PASSWD_FIELD = "password"

    //actions
    def dashboard = Action {
        Ok(views.html.dashboard())
    }

    def auth(login: String, pass: String) = Action {
        println(login + pass)

        val info = Json.obj(
        LOGIN_FIELD -> login,
        PASSWD_FIELD -> pass
        );

        Ok(info)
    }

}
