import Product from "../models/Product.js";

export const getAllProducts = async (req, res, next) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch {
        next(err);
    }
}

export const getProduct = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch(err) {
        next(err);
    }
}

export const addProduct = async (req, res, next) => {
    const newProduct = new Product(req.body)

    try {
            const savedProduct = await newProduct.save()
            res.status(200).json(savedProduct)
    } catch(err) {
            next(err)
    }
}

export const updateProduct = async (req, res, next) => {
    try {
            const updatedProduct = await Product.findByIdAndUpdate(
                    req.params.id,
                    {$set : req.body},
                    {new : true}
            )

            res.status(200).json(updatedProduct)

    } catch(err) {
            next(err);
    }
}

export const deleteProduct = async (req, res, next) => {
    try {
            await Product.findByIdAndDelete(
                    req.params.id,
                    {$set : req.body},
                    {new : true}
            )

            res.status(200).json("Deleted Product Records.")
            
    } catch(err) {
            next(err);
    }
}

export const getFeaturedProducts = async (req, res, next) => {
    try {
        const featured_products = await Product.find({featured: true});
        res.status(200).send(featured_products);
    } catch(err) {
        next(err);
    }

}

export const filterByPrice = async (req, res, next) => {
    const maxprice = req.body.price;

    try {
        const products = await Product.find({price: {$lte : maxprice}});
        res.status(200).json(products);
    } catch(err) {
        next(err);
    }
}

export const filterByRating = async (req, res, next) => {
    const min_rating = req.body.rating;

    try {
        const products = await Product.find({rating: {$gte : min_rating}});
        res.status(200).json(products);
    } catch(err) {
        next(err);
    }
}