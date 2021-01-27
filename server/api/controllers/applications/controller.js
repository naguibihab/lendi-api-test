import ApplicationsService from "../../services/applications.service";

export class Controller {
  async all(req, res) {
    try {
      const applications = await ApplicationsService.all();
      res.json(applications);
    } catch (error) {
      res.status(500).send({ error });
    }
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

    try {
      const result = await ApplicationsService.create(application);

      res.status(201).json(result);
    } catch (error) {
      res.status(500).send({ error });
    }
  }
}
export default new Controller();
