function experience ()
{
    return (
      <>
        <div className="flex flex-col w-full border-opacity-50">
          <div className="divider font-bold text-xl mb-10">
            <div className="card bg-base-300 px-4 py-2">Experience</div>
          </div>
        </div>
        {/* component */}
        <div className="py-3 w-full px-2 sm:px-6">
          <div className="relative antialiased text-sm font-semibold">
            {/* Vertical bar running through middle */}
            <div className="hidden sm:block w-1 bg-base-200 absolute h-full left-1/2 transform -translate-x-1/2" />
            {/* Left section, set by justify-start and sm:pr-8 */}
            <div className="mt-6 sm:mt-0 sm:mb-12">
              <div className="flex flex-col sm:flex-row items-center">
                <div className="flex justify-start w-full mx-auto items-center">
                  <div className="w-full sm:w-1/2 sm:pr-8">
                    <div className="card rounded-xl bg-base-200">
                      <div className="p-6">
                        <h5 className="font-bold text-lg mb-0">
                          Magang Programmer MSIB Kemendikbud RI
                        </h5>
                        <p className="font-lights text-base mb-3">
                          Yayasan Hasnur Centre (Agu 2021 - Des 2021)
                        </p>
                        <div className="badge badge-neutral m-1">PHP</div>
                        <div className="badge badge-neutral m-1">Bootstrap</div>
                        <div className="badge badge-neutral m-1">
                          Javascript
                        </div>
                        <div className="badge badge-neutral m-1">Laravel</div>
                        <div className="badge badge-neutral m-1">Github</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-full bg-white border-base-200 border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                  <img
                    src="/experience/kampus_merdeka.ico"
                    className="rounded-full"
                    alt="Kampus Merdeka"
                  />
                </div>
              </div>
            </div>
            {/* Right section, set by justify-end and sm:pl-8 */}
            <div className="mt-6 sm:mt-0 sm:mb-12">
              <div className="flex flex-col sm:flex-row items-center">
                <div className="flex justify-end w-full mx-auto items-center">
                  <div className="w-full sm:w-1/2 sm:pl-8">
                    <div className="card rounded-xl bg-base-200">
                      <div className="p-6">
                        <h5 className="font-bold text-lg mb-0">
                          Full Stack Web Developer Digitaliz
                        </h5>
                        <p className="font-lights text-base mb-3">
                          Yayasan Hasnur Centre (Jan 2022 - Sekarang)
                        </p>
                        <div className="badge badge-neutral m-1">Laravel</div>
                        <div className="badge badge-neutral m-1">Codeigniter 3</div>
                        <div className="badge badge-neutral m-1">Bootstrap</div>
                        <div className="badge badge-neutral m-1">
                          Tailwind CSS
                        </div>
                        <div className="badge badge-neutral m-1">MySQL</div>
                        <div className="badge badge-neutral m-1">JQuery</div>
                        <div className="badge badge-neutral m-1">Github</div>
                        <div className="badge badge-neutral m-1">Filezilla</div>
                        <div className="badge badge-neutral m-1">
                          Laravel Spatie Permission
                        </div>
                        <div className="badge badge-neutral m-1">
                          Laravel Spatie Media Library
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-full bg-white  border-base-200 border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                  <img
                    src="/experience/digitaliz.svg"
                    className="rounded-full"
                    alt="Digitaliz"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default experience;