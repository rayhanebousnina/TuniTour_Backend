const Category = require('../Models/CategoryModel');


module.exports = {
   

    addCategory: async(req,res) => {

        const categoryName = req.body.categoryName
        const categoryDescription = req.body.categoryDescription
        const categoryImage = req.body.categoryImage

        try {
            category = new Category({
                categoryName,
                categoryDescription,
                categoryImage
            })
            await category.save()
            res.json(category)
        }
        catch (error) {
            console.error(error.message)
        }
    },

    getCategory: async(req,res) => {
        try {
            const category = await Category.find()
            res.json(category)
        }
        catch (error) {
            console.error(error.message)
        }
    },

    deleteCategory: async(req,res) => {
        try {
            const category = await Category.findByIdAndDelete(req.params.id)
            res.json(category)
        }
        catch (error) {
            console.error(error.message)
        }
    },

    updateCategory: async(req,res) => {
        try {
            const category = await Category.findByIdAndUpdate(req.params.id, req.body, {new : true})
            res.json(category)
        }
        catch (error) {
            console.error(error.message)
        }
    }
};
