const { Router } = require("express");
const router = Router();

const itemDao = require('../daos/items');

router.get("/", (req, res, next) => {
  res.json(itemDao.getAll())
});

router.get("/:id", (req, res, next) => {
  // TODO: complete this route
  const itemId = req.params.id;
  const item = itemDao.getById(itemId);
  if(item){
    res.json(item);
  } else{
  res.sendStatus(404);}
});

router.post("/", (req, res, next) => {
  const newItem = req.body;
  const createdItem = itemDao.create(newItem);
  if (createdItem){
    res.sendStatus(200);
  } else{
    res.sendStatus(500);
  }
  
});

router.put("/:id", (req, res, next) => {
  // TODO: complete this route 
  const itemId = req.params.id;
  const updatedItem = req.body;
  const success = itemDao.updateById(itemId, updatedItem);
 if (success){
  res.sendStatus(200);
 }else{res.sendStatus(404);}
  
});

router.delete("/:id", async (req, res, next) => {
  // TODO: complete this route
  const itemId = req.params.id;
  const success = await itemDao.deleteById(itemId);
  if (success){
    res.sendStatus(200);
  }else{
    res.sendStatus(404);
  }
  
});

module.exports = router;
