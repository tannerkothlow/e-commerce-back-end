const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try {
    const categoryData = await Category.findAll({
      include: [{model: Product}],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{model: Product}],
    });
    if (!categoryData) {
      res.status(400).json({ message: 'No category found by that ID!' });
      return;
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {

  // req.body should look like this

  // {
  //   category_name: Example
  // }

  try {
    console.log(req.body);
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory)
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value

  // same req.body as post
  
  try {
    const updateCategory = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
      individualHooks: true
    });
    if (!updateCategory[0]) {
      res.status(404).json({ message: 'No category found with this ID!'});
      return;
    }
    res.status(200).json(updateCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {

  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
