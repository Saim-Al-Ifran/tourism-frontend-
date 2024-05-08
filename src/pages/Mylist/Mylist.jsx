import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Mylist = () => {
  return (
      <>
            <h2 class="text-3xl font-bold mt-[3rem]  text-center">My tourist Spots</h2>
            <div className="overflow-x-auto mb-[4rem] mt-[4rem]">
                    <table className="table">
                        {/* head */}
                        <thead>
                        <tr>
                            <th>
 
                            </th>
                            <th>Image</th>
                            <th>Tourist spot</th>
                            <th>Location</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                            </th>
                            <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                </div>
                                </div>
 
                            </div>
                            </td>
                            <td>
                            Zemlak, Daniel and Leannon
 
                            </td>
                            <td>Bangladesh</td>
                            <th>
                                <Link to="/edit_spot/2">
                                    <Button color="green" className="mr-2"><i class="fa-solid fa-pen-to-square"></i> Edit</Button> 
                                </Link>
                              
                               <Button color="red"><i class="fa-solid fa-trash"></i> Delete</Button>
                            </th>
                         </tr>
                        </tbody>
 
                        
                    </table>
            </div>
      </>
  )
}

export default Mylist