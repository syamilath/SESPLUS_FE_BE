export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-center">
      
          <p className="text-sm">&copy; {new Date().getFullYear()} SATHALLA All rights reserved.</p>
        
        </div>
      </footer>
    );
  }
  