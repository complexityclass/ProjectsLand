package controllers

import play.api.libs.json.{JsArray, Json}
import play.api.mvc._

/**
  * Created by V.Popov on 24/01/16.
  */
class DashboardController extends Controller {

    //actions
    def dashboard = Action {
        Ok(views.html.dashboard())
    }

}
