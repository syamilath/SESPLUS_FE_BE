import vine from '@vinejs/vine'


export const createBookValidator = vine.compile(
    vine.object({
  title: vine.string().trim().minLength(3).maxLength(20),
  author: vine.string().trim().minLength(3).maxLength(20),
  category: vine.string().trim()
})

)

// validasi update

export const updateBookValidator = vine.compile(
  vine.object({
    title: vine.string().trim().minLength(3).maxLength(20).optional(),
    author: vine.string().trim().minLength(3).maxLength(20).optional(),
    category: vine.string().trim()

  })
)


// validasi untuk menghapus

export const deleteBookValidator = vine.compile(
  vine.object({
    params: vine.object({
      id: vine.number().positive(),
    }),
  })
)