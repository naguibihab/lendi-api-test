import ApplicationsService from "../../services/applications.service";

export class Controller {
  async all(req, res) {
    await ApplicationsService.all().then((r) => res.json(r));
  }

  async byId(req, res) {
    const application = await ApplicationsService.byId(req.params.id);

    if (!application) {
      res.status(404).end();
      return;
    }

    res.json(application);
  }

  async create(req, res) {
    const application = req.body;

    const result = await ApplicationsService.create(application);

    res
      .status(201)
      .location(`/api/v1/applications/${r.id}`)
      .json(result);
  }
}
export default new Controller();
