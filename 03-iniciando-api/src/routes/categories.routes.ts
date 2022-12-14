import { Router } from "express";
import multer from "multer";

import { createCategoryController } from "../Modules/cars/useCases/CreateCategory";
import { importCategoryController } from "../Modules/cars/useCases/ImportCategory";
import { listCategoriesController } from "../Modules/cars/useCases/listCategories";

const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  return importCategoryController.handle(request, response);
});

export { categoriesRoutes };
