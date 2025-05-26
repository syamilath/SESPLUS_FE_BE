/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import BooksController from '#controllers/books_controller'
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'ucup',
  }
})

// router.get('/siswa', '#controllers/siswas_controller.index')
// router.post('/kirim', '#controllers/siswas_controller.kirimData')
// router.get('/ambil', '#controllers/siswas_controller.ambilData')

router
  .group(() => {
    router.get('/', [BooksController, 'index'])
    router.post('/', [BooksController, 'store'])
    router.get('/:id', [BooksController, 'show'])
    router.put('/:id', [BooksController, 'update'])
    router.delete('/:id', [BooksController, 'destroy'])
    
  })
  .prefix('/books')

