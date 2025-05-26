// import type { HttpContext } from '@adonisjs/core/http'

// export default class SiswasController {
//   /**
//    * Display a list of resource
//    */
//   async index({response}: HttpContext) {
//     const data = {
//       id :1,
//       nama: 'udin',
//       age : 28
      
//     }

//       return response.json({"data siswa": data})
//   }


//   async kirimData({request, response, session}:HttpContext) {
//     const dataSiswa = request.only(['id', 'nama','kelas', 'umur'])
  
//     session.put('id', dataSiswa.id)
//     session.put('nama', dataSiswa.nama)
//     session.put('kelas', dataSiswa.kelas)
//     session.put('umur', dataSiswa.umur)
  
//    return response.json({"data siswa": dataSiswa})
//   }
  
//   async ambilData({response, session}: HttpContext) {
//     const id = session.get('id')
  
//     return response.json({"data id siswa": id})
//   }
  
  

//   /**
//    * Display form to create a new record
//    */
//   async create({}: HttpContext) {}

//   /**
//    * Handle form submission for the create action
//    */
//   async store({ request }: HttpContext) {}

//   /**
//    * Show individual record
//    */
//   async show({ params }: HttpContext) {}

//   /**
//    * Edit individual record
//    */
//   async edit({ params }: HttpContext) {}

//   /**
//    * Handle form submission for the edit action
//    */
//   async update({ params, request }: HttpContext) {}

//   /**
//    * Delete record
//    */
//   async destroy({ params }: HttpContext) {}
// }



