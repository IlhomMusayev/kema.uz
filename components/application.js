import Image from "next/image";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
const id = "-1001807268581";
const token = "6411282848:AAGJtJi0_4EMiTkxODWYe0XQZ4i3EO4nxZo";

export default function Application() {
  const [loading, setLoading] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let response = await axios
      .get(
        encodeURI(
          `https://api.telegram.org/bot${token}/sendMessage?chat_id=${id}&text= 🆕 Yangi ariza. \n\n🙎‍♂ Ismi: ${
            e.target.name.value
          } \n📞 Telefon raqami: ${
            "+998" + e.target.phone_number.value
          } \n&parse_mode=html`
        )
      )
      .then((res) => {
        toast.success("Ariza muvaffaqiyatli yuborildi");
      })
      .catch((err) => {
        toast.error("Ariza yuborishda xatolik");
      })
      .finally(() => {
        setLoading(false);
      });

    e.target.reset();
  };
  return (
    <div>
      <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 class="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">
            Ariza qoldirish
          </h2>
          <p className="text-gray-400 text-md text-center mt-2">
            Ariza qoldiring va siz bilan tez orada bog'alanamiz
          </p>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form class="space-y-6" onSubmit={onSubmit}>
            <div>
              <label
                for="name"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Ismingiz <span className="text-red-600">*</span>
              </label>
              <div class="mt-2">
                <input
                  id="name"
                  name="name"
                  type="name"
                  autocomplete="name"
                  required
                  class="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                for="phone_number"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Telefon raqamingiz <span className="text-red-600">*</span>
              </label>
              <div class="mt-2 relative">
                <span className="absolute top-1/2 left-3 translate-y-[-50%]">
                  +998
                </span>
                <input
                  id="phone_number"
                  name="phone_number"
                  type="tel"
                  autocomplete="phone_number"
                  required
                  maxLength={9}
                  minLength={9}
                  class="block w-full rounded-md border-0 py-2 pl-14 px-3  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                class="flex w-full justify-center rounded-md bg-[#4A94FE] px-4 py-3 text-md font-medium leading-6 text-white shadow-sm hover:bg-[#4A94FE] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4A94FE] disabled:bg-gray-400 disabled:cursor-not-allowed"
                disabled={loading}
              >
                {loading ? "Ariza yuborilmoqda..." : "Ariza qoldirish"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
