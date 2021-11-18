import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import NextImage from "next/image";
import { Fragment, PropsWithChildren, ReactElement } from "react";

interface ICustomSelect<T> {
  label?: string;
  labelTag?: string;
  placeholder?: string;
  selected?: T;
  selections: T[];
  setSelected: (value: T) => void;
  type?: "text";
}
export const CustomSelect = <T,>({
  label,
  labelTag,
  placeholder,
  selected,
  selections,
  setSelected,
  type,
}: PropsWithChildren<ICustomSelect<T>>): ReactElement | null => {
  return (
    <Listbox value={selected} onChange={setSelected} as="div">
      {({ open }) => (
        <>
          <Listbox.Label
            className="block text-sm font-medium text-gray-700"
            htmlFor={labelTag}
          >
            {label}
          </Listbox.Label>
          <div className="mt-1 relative">
            <Listbox.Button
              id={labelTag}
              name={labelTag}
              className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 sm:text-sm"
            >
              <span className="flex items-center">
                {/* <NextImage
                  src={selected.avatar}
                  alt=""
                  className="flex-shrink-0 h-6 w-6 rounded-full"
                /> */}
                <span className="ml-3 block truncate">{selected.name}</span>
              </span>
              <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {selections.map((selection) => (
                  <Listbox.Option
                    key={selection.id}
                    className={({ active }) =>
                      classNames(
                        active ? "text-white bg-red-600" : "text-gray-900",
                        "cursor-default select-none relative py-2 pl-3 pr-9"
                      )
                    }
                    value={selection}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          {/* <NextImage
                            src={person.avatar}
                            alt=""
                            className="flex-shrink-0 h-6 w-6 rounded-full"
                          /> */}
                          <span
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              "ml-3 block truncate"
                            )}
                          >
                            {selection.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-red-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
