const express = require("express");
const router = express.Router();
const slugify = require("slugify");
const Category = require("./Category");

//index
router.get("/admin/categories", (req, res) => {
  Category.findAll().then((categories) => {
    res.render("admin/categories/index", {
      categories: categories,
    });
  });
});
//create get
router.get("/admin/categories/new", (req, res) => {
  res.render("admin/categories/new");
});
//create post
router.post("/categories/save", (req, res) => {
  var title = req.body.title;
  if (title != undefined) {
    Category.create({
      title: title,
      slug: slugify(title),
    }).then(() => {
      //  res.status(201).send();
      res.redirect("/admin/categories");
    });
  } else {
    res.redirect("/admin/categories/new");
  }
});
//delete
router.get("/admin/categories/delete/:id", (req, res) => {
  var id = req.params.id;
  if (id != undefined) {
    if (!isNaN(id)) {
        Category.destroy({
            where: {
              id: id,
            },
          }).then(() => {
            res.redirect("/admin/categories");
          });
    } else {
      res.redirect("/admin/categories");
    }
  }else{
    res.redirect("/admin/categories");
  }
 
});

module.exports = router;
