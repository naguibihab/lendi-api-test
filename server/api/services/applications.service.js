import l from "../../common/logger";
import db from "./applications.db.service";

class ApplicationsService {
  async all() {
    l.info(`${this.constructor.name}.all()`);
    return await db.all();
  }

  async byId(id) {
    l.info(`${this.constructor.name}.byId(${id})`);
    return await db.byId(id);
  }

  async create(application) {
    return await db.insert(application);
  }
}

export default new ApplicationsService();
