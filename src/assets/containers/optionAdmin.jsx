import Button from "../components/buttons/button";

const OptionAdmin = () => {
  return (
    <>
      <section class="admin-page text-3xl p-4">
        <h1 className="mb-5">Quiz</h1>
        <div className="mb-5 flex gap-3 justify-between">
          <select
            id="users"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-l rounded-lg p-4 "
          >
            <option selected>Choose a quiz</option>
            <option value="US">MaxFly</option>
            <option value="CA">MaxFly</option>
            <option value="FR">MaxFly</option>
            <option value="DE">MaxFly</option>
          </select>
          <div className="flex flex-col">
            <Button text="Modify Question A"></Button>
            <Button text="Modify Question B"></Button>
          </div>
          <div className="flex flex-col">
            <Button text="Modify Answer A"></Button>
            <Button text="Modify Answer B"></Button>
          </div>
          <Button text="Delete"></Button>
        </div>
      </section>
      <div class="w-3/4 p-8 rounded-md">
        <div class=" flex items-center justify-between">
          <div>
            <h2 class="text-gray-600 font-semibold">Users</h2>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center p-2 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                />
              </svg>
              <input
                class=" outline-none ml-1 block "
                type="text"
                name=""
                id=""
                placeholder="search..."
              />
            </div>
            <div class="lg:ml-40 ml-10 space-x-8">
              <button class="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">
                Create
              </button>
            </div>
          </div>
        </div>
        <div>
          <div class=" sm:-mx-8 px-4 sm:px-8 py-4 ">
            <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table class="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xl font-semibold text-gray-600 uppercase tracking-wider">
                      Name
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xl font-semibold text-gray-600 uppercase tracking-wider">
                      Nb of quiz
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xl font-semibold text-gray-600 uppercase tracking-wider">
                      Created at
                    </th>

                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xl font-semibold text-gray-600 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-xl">
                      <div class="flex items-center">
                        <div class="ml-3">
                          <p class="text-gray-900 whitespace-no-wrap">Maxfly</p>
                        </div>
                      </div>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-xl">
                      <p class="text-gray-900 whitespace-no-wrap">45</p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-xl">
                      <p class="text-gray-900 whitespace-no-wrap">
                        Jan 21, 2020
                      </p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-xl">
                      <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span
                          aria-hidden
                          class="absolute inset-0  opacity-50 rounded-full"
                        ></span>
                        <div className="flex gap-3">
                          <Button text="Upgrade"></Button>
                          <Button text="Downgrade"></Button>
                          <Button text="Delete"></Button>
                        </div>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-xl">
                      <div class="flex items-center">
                        <div class="ml-3">
                          <p class="text-gray-900 whitespace-no-wrap">Maxfly</p>
                        </div>
                      </div>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-xl">
                      <p class="text-gray-900 whitespace-no-wrap">45</p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-xl">
                      <p class="text-gray-900 whitespace-no-wrap">
                        Jan 21, 2020
                      </p>
                    </td>

                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-xl">
                      <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span
                          aria-hidden
                          class="absolute inset-0  opacity-50 rounded-full"
                        ></span>
                        <div className="flex gap-3">
                          <Button text="Upgrade"></Button>
                          <Button text="Downgrade"></Button>
                          <Button text="Delete"></Button>
                        </div>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-xl">
                      <div class="flex items-center">
                        <div class="ml-3">
                          <p class="text-gray-900 whitespace-no-wrap">Maxfly</p>
                        </div>
                      </div>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-xl">
                      <p class="text-gray-900 whitespace-no-wrap">45</p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-xl">
                      <p class="text-gray-900 whitespace-no-wrap">
                        Jan 21, 2020
                      </p>
                    </td>

                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-xl">
                      <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span
                          aria-hidden
                          class="absolute inset-0  opacity-50 rounded-full"
                        ></span>
                        <div className="flex gap-3">
                          <Button text="Upgrade"></Button>
                          <Button text="Downgrade"></Button>
                          <Button text="Delete"></Button>
                        </div>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                <span class="text-xs xs:text-xl text-gray-900">
                  Showing 1 to 4 of 50 Entries
                </span>
                <div class="inline-flex mt-2 xs:mt-0">
                  <button class="text-xl text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l">
                    Prev
                  </button>
                  &nbsp; &nbsp;
                  <button class="text-xl text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OptionAdmin;
