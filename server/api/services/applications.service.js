import l from "../../common/logger";
import db from "./applications.db.service";

class ApplicationsService {
  async all() {
    l.info(`${this.constructor.name}.all()`);
    return await db.all();
  }

  async byId(id) {
    l.info(`${this.constructor.name}.byId(${id})`);
    const response = await db.byId(id);

    return response;
  }

  async create(application) {
    const response = await db.insert(application);

    return response;
  }
}

export default new ApplicationsService();
