import type { HttpContext } from '@adonisjs/core/http'
import Book from '#models/book'
import {
  createBookValidator,
  updateBookValidator,
  deleteBookValidator,
} from '#validators/create_book'

export default class BooksController {
  public async index({ response }: HttpContext) {
    const books = await Book.all()
    return response.json(books)
  }

  public async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createBookValidator)
    const book = await Book.create(payload)
    return response.created({ message: 'Buku berhasil ditambahkan', data: book })
  }

  public async show({ params, response }: HttpContext) {
    const book = await Book.find(params.id)
    if (!book) {
      return response.notFound({ message: 'Buku tidak ditemukan' })
    }
    return response.ok(book)
  }

  public async update({ params, request, response }: HttpContext) {
    const data = await request.validateUsing(updateBookValidator)

    const book = await Book.find(params.id)
    if (!book) {
      return response.notFound({ message: 'Buku tidak ditemukan' })
    }
    book.merge(data)
    await book.save()

    return response.ok({ message: 'Buku berhasil diupdate', data: book })
  }

  public async destroy({ request, response }: HttpContext) {
    const { params } = await request.validateUsing(deleteBookValidator)
    const book = await Book.find(params.id)
    if (!book) {
      return response.notFound({ message: 'Buku tidak ditemukan' })
    }
    await book.delete()
    return response.ok({ message: 'Cihuyyyy buku berhasil dihapus' })
  }
}