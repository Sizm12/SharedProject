export default class HomeController {
  index(request, response) {
    return response.status(200).json({
      message: "Hello Word from Home Controller",
      success: true,
    });
  }

  create(request, response) {
    return response.status(200).json({
      message: "Creating something!",
      success: true,
    });
  }
}
