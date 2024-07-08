import Book from "../models/bookModel.js";


//create new book

export const createBook = async (req, res, next) => {
    const { title, author, price, stockQuantity } = req.body;

    try {
        const newBook = new Book({ title, author, price, stockQuantity });
        await newBook.save()
        res.status(201).json({ message: "Book Created Sucessfully" })
    } catch (error) {
        console.log(error);
        req.status(500).json({message : "Error creating book"})
        // next(error)
    }
}

//get all books

export const getAllBooks = async (req, res, next) => {
    try {
        const books = await Book.find();
        res.json(books)
    } catch (error) {
        console.log(error);
        next(error);
    }
}

//get book by id

export const getBookById = async (req, res, next) => {
    const { id } = req.params;

    try {
        const book = await Book.findById(id);

        if (!book) {
            return res.status(404).json({ message: "Book not found" })
        }
        res.json(book);

    } catch (error) {
        console.log("error finding book", error);
        req.status(500).json({message : "Error geting book"})
    }
}


//update a book

export const updateBook = async (req, res, next) =>{
    const {id} = req.params;
    const {title, author, price, stockQuantity} = req.body;

    try {
        const updatedBook = await Book.findByIdAndUpdate(id, {title, author, price, stockQuantity}, {new : true});
        if(!updatedBook){
            return res.status(404).json({message : "Book not found"})
        }

        res.json({message : "Book updated sucessfull", updateBook});
    } catch (error) {
        console.log("Error updating book" , error);
        req.status(500).json({message : "Error updating book"})
    }
}

//delete book

export const deleteBook = async (req, res, next) =>{
    const {id} = req.params;
    try {
        const deletedBook = await Book.findByIdAndDelete(id);
        if(!deletedBook){
            return res.status(404).json({message : "Book not Found"})
        }
        res.json({message : "Book deleted sucessfull"})
    } catch (error) {
        
        console.log("error deleting book", error);
        req.status(500).json({message : "Error deleting book"})

    }
}

