import { Outlet, useNavigation } from "react-router-dom";
import Spinner from "../../../components/Spinner/Spinner";


const FixedHome = () => {

const navigation = useNavigation();
// console.log(navigation.state === 'submitting')
const isLoading = navigation.state === 'loading'
console.log(isLoading)

    return (
        <div className=" text-2xl">
            <div className="flex justify-between items-center shadow-2xl">
                <div>
                <h1 className=" font-bold p-10 ">Amaxon</h1>
                </div>
                <div>
                    <ul className="flex gap-7">
                        <li><a href="/">Home</a></li>
                        <li><a href="/products">Products</a></li>
                        <li><a href="/dashboard">Dashboard</a></li>
                    </ul>
                </div>
            </div>

            

 <div>
 <Outlet></Outlet>
 </div>


            <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
        </li>
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">Licensing</a>
        </li>
        <li>
            <a href="#" className="hover:underline">Contact</a>
        </li>
    </ul>
    </div>
</footer>


        </div>
    );
};

export default FixedHome;